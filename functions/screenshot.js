const { builder } = require('@netlify/functions')
const chromium = require('chrome-aws-lambda')

async function screenshot(url) {
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: {
      width: 1200,
      height: 628,
    },
    headless: chromium.headless,
  })

  const page = await browser.newPage()

  // TODO is there a way to bail at timeout and still show what’s rendered on the page?
  await page.goto(
    `https://sarabennour.com/og-image.html?${url}`,
    {
      waitUntil: ['load', 'networkidle0'],
      timeout: 8500,
    }
  )
  // let statusCode = response.status();
  // TODO handle 404/500 status codes better

  const options = {
    type: 'jpeg',
    encoding: 'base64',
    quality: 80,
  }

  const output = await page.screenshot(options)

  await browser.close()

  return output
}

// Based on https://github.com/DavidWells/netlify-functions-workshop/blob/master/lessons-code-complete/use-cases/13-returning-dynamic-images/functions/return-image.js
async function handler(event, context) {
  const url = event.rawQuery

  try {
    const output = await screenshot(url)

    return {
      statusCode: 200,
      headers: {
        'content-type': `image/jpeg`,
      },
      body: output,
      isBase64Encoded: true,
    }
  } catch (error) {
    return {
      // We need to return 200 here or Firefox won’t display the image
      // HOWEVER a 200 means that if it times out on the first attempt it will stay the default image until the next build.
      statusCode: 200,
      headers: {
        'content-type': 'image/svg+xml',
        // 'x-error-message': error.message,
      },
      body: "",
      isBase64Encoded: false,
    }
  }
}

exports.handler = builder(handler)

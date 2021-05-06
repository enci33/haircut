const puppeteer = require('puppeteer')
const { autoScroll} = require('./src/helpers')

const TWITTER_XPATH = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div/div[2]/section/div/div'
// 打开推特页面 
const init = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://twitter.com/elonmusk');
  await page.waitForXPath(TWITTER_XPATH, {
    visible: true
  })
  const elements = Array.from(document.querySelector(TWITTER_XPATH))
  
  await page.screenshot({path: 'example.png'})
  // await browser.close();
}

init()
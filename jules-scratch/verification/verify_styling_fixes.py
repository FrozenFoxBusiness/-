import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Go to the local index.html file
        await page.goto(f'file://{file_path}')

        # Take a screenshot of the main page with new button styles
        await page.screenshot(path='jules-scratch/verification/styled_main_page.png')

        # Hover over a plugin card
        await page.hover('.plugin-card[data-category="starsmp"]')
        await page.screenshot(path='jules-scratch/verification/plugin_card_hover.png')

        # Open the Star SMP modal
        await page.click('div[data-category="starsmp"] .btn-details')
        await page.wait_for_selector('#starsmp-details', state='visible')

        # Take a screenshot of the modal with styled tabs
        await page.screenshot(path='jules-scratch/verification/styled_modal_tabs.png')

        # Hover over a tab button
        await page.hover('#starsmp-details .tab-btn[data-category="nether-starsmp"]')
        await page.screenshot(path='jules-scratch/verification/modal_tab_hover.png')

        await browser.close()

asyncio.run(main())

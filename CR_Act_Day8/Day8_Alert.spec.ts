import { test, expect  } from "@playwright/test"


test(`Test to Handle alerts using page.on`,async({page})=>{


    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`,);

   // await page.waitForTimeout(3000);
   const frame =  page.frameLocator("#iframeResult").first();

 

   await page.waitForTimeout(3000);

    page.on(`dialog`,async(alert)=>{


const messageReturned = alert.message();
        console.log(`The message says ${messageReturned}`);


        const typeReturned = alert.type()

        console.log(`The type of the alert is ${typeReturned}`);


        if(typeReturned==='confirm'){
            await alert.accept();
        }else if (typeReturned==='prompt'){
            await alert.accept("Testleaf")
        }else
            await alert.dismiss()            
        
    })

    await frame.locator(`//button[text()='Try it']`).click();
    await page.waitForTimeout(3000);

    const actual = await frame.locator(`#demo`);

    await expect(actual).toHaveText("You pressed OK!");

       await page.waitForTimeout(3000)


});

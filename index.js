#!/usr/bin/env node
import inquirer from 'inquirer';
import chalkanimation from 'chalk-animation';
const stop = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let WelcomeMessage = chalkanimation.neon('Currency Converter');
    await stop();
    WelcomeMessage.stop();
}
await Welcome();
let usdToPkr = 277.85;
let pkrToDollar = 0.0036;
let euroToPkr = 302.00;
let PkrTOEuro = 0.0033;
let RiyalToPkr = 74.07;
let PkrToRiyal = 0.013;
let usdToEuro = 0.92;
let usdToRiyal = 3.75;
let eurToUSD = 1.08;
let eurToRiyal = 4.06;
let SARToUSD = 0.27;
let SARToEUR = 0.25;
async function Converter() {
    let convert = await inquirer.prompt([{
            name: 'ConvertsFrom',
            type: 'list',
            message: 'Which Currency do you want to convert',
            choices: ['USD', 'EUR', 'SAR', 'PKR']
        }, {
            name: 'ConvertsTo',
            type: 'list',
            message: 'Which Currency do you want to convert to',
            choices: ['USD', 'EUR', 'SAR', 'PKR']
        }, {
            name: 'amount',
            type: 'input',
            message: 'Enter Amount',
        }]);
    if (convert.ConvertsFrom === 'USD') {
        if (convert.ConvertsTo === 'USD') {
            let amount = convert.amount;
            console.log(`Your amount in USD is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'EUR') {
            let amount = convert.amount * usdToEuro;
            console.log(`Your amount in EUR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'SAR') {
            let amount = convert.amount * usdToRiyal;
            console.log(`Your amount in SAR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'PKR') {
            let amount = convert.amount * usdToPkr;
            console.log(`Your amount in PKR is : ${amount}`);
        }
    }
    else if (convert.ConvertsFrom === 'EUR') {
        if (convert.ConvertsTo === 'USD') {
            let amount = convert.amount * eurToUSD;
            console.log(`Your amount in USD is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'EUR') {
            let amount = convert.amount;
            console.log(`Your amount in EUR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'SAR') {
            let amount = convert.amount * eurToRiyal;
            console.log(`Your amount in SAR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'PKR') {
            let amount = convert.amount * euroToPkr;
            console.log(`Your amount in PKR is : ${amount}`);
        }
    }
    else if (convert.ConvertsFrom === 'SAR') {
        if (convert.ConvertsTo === 'USD') {
            let amount = convert.amount * SARToUSD;
            console.log(`Your amount in USD is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'EUR') {
            let amount = convert.amount * SARToEUR;
            console.log(`Your amount in EUR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'SAR') {
            let amount = convert.amount;
            console.log(`Your amount in SAR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'PKR') {
            let amount = convert.amount * RiyalToPkr;
            console.log(`Your amount in PKR is : ${amount}`);
        }
    }
    else if (convert.ConvertsFrom === 'PKR') {
        if (convert.ConvertsTo === 'USD') {
            let amount = convert.amount * pkrToDollar;
            console.log(`Your amount in USD is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'EUR') {
            let amount = convert.amount * PkrTOEuro;
            console.log(`Your amount in EUR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'SAR') {
            let amount = convert.amount * PkrToRiyal;
            console.log(`Your amount in SAR is : ${amount}`);
        }
        else if (convert.ConvertsTo === 'PKR') {
            let amount = convert.amount;
            console.log(`Your amount in PKR is : ${amount}`);
        }
    }
}
async function restart() {
    do {
        await Converter();
        var question = await inquirer.prompt([{
                name: 'que',
                type: 'input',
                message: 'Do you want more calculation if yes type [Y]'
            }]);
    } while (question.que === 'Y');
}
restart();

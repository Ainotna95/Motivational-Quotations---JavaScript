let randomNumber = Math.floor(Math.random() * 11);
let motivationalQuote = '';
switch (randomNumber) { 
    case 0: 
        motivationalQuote = 'Life is short so live it wisely.';
        break;
    case 1:
        motivationalQuote = 'It\'s not what happens to you, it\'s how you react to it.';
        break;
    case 2:
        motivationalQuote = 'Live each day as if it\'s your last. We do not know how long we have on this earth.';
        break;
    case 3:
        motivationalQuote = 'Do not take anything for granted. Everything is a blessing.';
        break;
    case 4: 
        motivationalQuote = 'Do something every day that scares you or gets you out of your comfort zone. You\'ll thank yourself for it later.';
        break;
    case 5:
        motivationalQuote = 'Enjoy life. As far as we know, we only get one shot at it.';
        break;
    case 6:
        motivationalQuote = 'Daring to be different is the greatest sign of confidence. Don\'t be afraid to do so.';
        break;
    case 7:
        motivationalQuote = 'It\'s never too late to do what you\'ve always dreamed of doing.';
        break;
    case 8:
        motivationalQuote = 'Seek joy in the simple pleasures. That way, you will appreciate what you have rather than constantly looking for something better.';
        break;
    case 9:
        motivationalQuote = 'He who knows himself is very powerful, indeed.';
        break;
    case 10:
        motivationalQuote = 'Give without expecting anything in return. You will feel better for it.';
    default:
        motivationalQuote = 'Please try again.';
}
console.log(motivationalQuote)//prints a random quotation depending on the random number generated
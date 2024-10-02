// Defines saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Defines mondayWork function expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// 3) Defines wrapAdjective function
function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}



// saturdayFun function tests
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun('fieldhockey')); // "This Saturday, I want to play-fieldhockey!"

// mondayWork function tests
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork('work from home')); // "This Monday, I will work from home."

// wrapAdjective function tests
const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars('gorgreous')); // "You are *gorgreous*!"

const wrapWithBars = wrapAdjective('||');
console.log(wrapWithBars('a genius')); // "You are ||a genius||!"

//#iz6emEsP2BA

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];


console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index+1})));


//#AiN5CoUQ

function cloner (obj) {
    if(obj) {
        let functions = [];
        for(key in obj) {
            if(typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }

        const cloneObj = JSON.parse(JSON.stringify(obj));
        for(const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        return cloneObj;



    }
}

 clone = cloner({id:123, name: 'Tt' , greeting() {console.log('hello')}, foo() {console.log('bar')}});

 clone.foo();
 clone.greeting();
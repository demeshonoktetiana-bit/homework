//#8Nmt60ZT

let elementDiv= document.createElement('div');
elementDiv.classList.add('wrap');
elementDiv.classList.add('collapse');
elementDiv.classList.add('alpha');
elementDiv.classList.add('beta');

const cloneBlock = elementDiv.cloneNode(true)

document.body.append(elementDiv, cloneBlock);



//#OPLI89c9G

let arr = ['Main','Products','About us','Contacts'];

    let menu = document.createElement('ul');
    document.body.appendChild(menu);

for( const item of arr){
    let li = document.createElement('li');
    li.innerText = item;
     menu.appendChild(li);

}




//#jeBqHV525U5
//Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration

// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
// {title: 'Java Complex', monthDuration: 6},
//
// {title: 'Python Complex', monthDuration: 6},
//
// {title: 'QA Complex', monthDuration: 4},
//
// {title: 'FullStack', monthDuration: 7},
//
// {title: 'Frontend', monthDuration: 4}
//
// ];
//
// for( const course of coursesAndDurationArray){
//    const div = document.createElement('div');
//    div.innerText = `${course.title} ${course.monthDuration}`
//    document.body.appendChild(div);
// }




//#Kx1xgoKy8

// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
//     {title: 'Java Complex', monthDuration: 6},
//
//     {title: 'Python Complex', monthDuration: 6},
//
//     {title: 'QA Complex', monthDuration: 4},
//
//     {title: 'FullStack', monthDuration: 7},
//
//     {title: 'Frontend', monthDuration: 4}
//
// ];
//
// for (const course of coursesAndDurationArray){
//     let courseDiv = document.createElement('div');
//     courseDiv.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = course.monthDuration;
//
//     courseDiv.append(h1, p);
//     document.body.appendChild(courseDiv);
// }


//

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray){
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = course.title;
    div.appendChild(h2);

    const propertyMonthDiv = document.createElement('div');
    propertyMonthDiv.innerText = course.monthDuration;

    const propertyHourDiv = document.createElement('div');
    propertyHourDiv.innerText = course.hourDuration;

    div.append(propertyMonthDiv, propertyHourDiv);

    const listWrapper = document.createElement('div');
    const ul = document.createElement('ul');

    for ( const module of course.modules ){
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    listWrapper.appendChild(ul);
    div.appendChild(listWrapper);
    document.body.appendChild(div);
}












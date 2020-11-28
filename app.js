let data = [
    {
        name: "Manish",
        email: "imvmanish19@gmail.com",
        suitable: "90"
    },
    {
        name: "Kiran",
        email: "example@gmail.com",
        suitable: "70"
    },
    {
        name: "Gopal",
        email: "example@gmail.com",
        suitable: "92"
    },
    {
        name: "Ram",
        email: "example@gmail.com",
        suitable: "93"
    },
    {
        name: "Krishna",
        email: "example@gmail.com",
        suitable: "95"
    },
    {
        name: "Harish",
        email: "example@gmail.com",
        suitable: "65"
    },
    {
        name: "Pradeep",
        email: "example@gmail.com",
        suitable: "85"
    },
    {
        name: "Shardul",
        email: "example@gmail.com",
        suitable: "71"
    },
    {
        name: "Devdutt",
        email: "example@gmail.com",
        suitable: "81"
    },
    {
        name: "Rajat",
        email: "example@gmail.com",
        suitable: "60"
    },
    {
        name: "Balaji",
        email: "example@gmail.com",
        suitable: "67"
    }
];


let hire = document.getElementById('hire');
let mail = document.getElementById('mail');
let online = document.getElementById('online');
let box = document.getElementById('data');

function generateRandom() {
    return data[Math.floor(Math.random() * data.length)];
}

function getData() {
    let newData = [];
    for(let i=0;i<data.length;i++) {
        newData.push(generateRandom());
    }
}

hire.onclick = function(event) {
    box.textContent = "";
    let table = document.createElement('table');
    let h1 = document.createElement('h1');
    h1.classList.add('welcome1');
    h1.textContent = "These are the candidates who have cleared 3 rounds,i have given the suitability percentage,please hire according to company requirements"
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th1.textContent = "Name";
    th2.textContent = "Email";
    th3.textContent = "Chances(in percentage)";
    let trow = document.createElement('tr');
    trow.append(th1,th2,th3);
    table.append(trow);
    for(let i=0;i<data.length;i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = `${data[i].name}`;
        let td2 = document.createElement('td');
        td2.textContent = `${data[i].email}`;
        let td3 = document.createElement('td');
        td3.textContent = `${data[i].suitable}`;
        tr.append(td1,td2,td3);
        let btn = document.createElement('button');
        btn.textContent = "Hire";
        btn.classList.add('btn-standard');
        table.appendChild(tr);
        table.classList.add('welcome2');
    }   
    box.append(h1);
    box.appendChild(table);
}

online.onclick = function(event) {
    box.textContent = "";
    let table = document.createElement('table');
    let h1 = document.createElement('h1');
    h1.classList.add('welcome1');
    h1.textContent = "Schedule a Gmeet Interview"
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th1.textContent = "Name";
    th2.textContent = "Email";
    th3.textContent = "Chances";
    let trow = document.createElement('tr');
    trow.append(th1,th2,th3);
    table.append(trow);
    for(let i=0;i<data.length;i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = `${data[i].name}`;
        let td2 = document.createElement('td');
        td2.textContent = `${data[i].email}`;
        let td3 = document.createElement('td');
        td3.textContent = `${data[i].suitable}`;
        tr.append(td1,td2,td3);
        let btn = document.createElement('button');
        btn.textContent = "Schedule";
        btn.classList.add('btn-standard');
        td3.appendChild(btn);
        table.appendChild(tr);
        table.classList.add('welcome2');
    }   
    box.append(h1);
    box.appendChild(table);
}

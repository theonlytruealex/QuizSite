const memberList = [{
    name: "Valeria",
    surname: "Murgoci",
    positon: "Design Lead",
    userId: 9458571,
    isTeamLead: true,
    favoriteFood: "caramels",
    emailAddress: "valeria.murg@camex.ro",
    phoneNumber: "2722345834",
    address: {
        city: "Bucuresti",
        street: "Soseaua Pipera",
        nr: 13,
    }
},
{
    name: "Cipici",
    surname: "Furat",
    positon: "Developer",
    userId: 9458574,
    isTeamLead: false,
    favoriteFood: "vodka",
    emailAddress: "cipici.fur@camex.ro",
    phoneNumber: "2722341834",
    address: {
        city: "Radautii de deal",
        street: "Fantanii",
        nr: 42,
    }
},
{
    name: "Ionica",
    surname: "Pitica",
    positon: "Technical Architect",
    userId: 9458572,
    isTeamLead: true,
    favoriteFood: "sange de taur",
    emailAddress: "ionica.pit@camex.ro",
    phoneNumber: "27253241834",
    address: {
        city: "Alt oras",
        street: "AAAAAH",
        nr: 123,
    }
},
{
    name: "Vali",
    surname: "Vijeliu",
    positon: "Developer",
    userId: 9458573,
    isTeamLead: false,
    favoriteFood: "cocaina",
    emailAddress: "vali.vijeliu@camex.ro",
    phoneNumber: "2723241834",
    address: {
        city: "Las Vegas",
        street: "MoneyMoney",
        nr: 69,
    }
},
{
    name: "Alt Galatean",
    surname: "Empty",
    positon: "Developer",
    userId: 9458500,
    isTeamLead: false,
    favoriteFood: "lame de ras",
    emailAddress: "altGalatean.emp@camex.ro",
    phoneNumber: "2723241834",
    address: {
        city: "Galati",
        street: "_",
        nr: 76,
    }
},
{
    name: "Fabian",
    surname: "Hanta",
    positon: "Developer",
    userId: 9458510,
    isTeamLead: false,
    favoriteFood: "lacrimi",
    emailAddress: "fabian.han@camex.ro",
    phoneNumber: "2723241834",
    address: {
        city: "Galati",
        street: "Cutit",
        nr: 77,
    }
},
];

const photoList = [{
    photoUrl: "https://i1.sndcdn.com/artworks-000021223010-8s64rf-t500x500.jpg",
    userId: 9458573,
    album: 1,
    size: "1555kb"
},
{
    photoUrl: "https://i.ytimg.com/vi/6PbVDuf7FfQ/maxresdefault.jpg",
    userId: 9458572,
    album: 2,
    size: "5TB"
}, {
    photoUrl: "https://yt3.googleusercontent.com/ytc/AL5GRJWXMuUWx1OonIPBHcmNNZBuAwh_2AK8jYbIOkIm=s900-c-k-c0x00ffffff-no-rjg",
    userId: 9458574,
    album: 3,
    size: "1Kb"
}, {
    photoUrl: "https://img.a1.ro/0/2021/8/29/1056769/dani-mocanu-l7j8vsj4.jpg?w=470",
    userId: 9458571,
    album: 4,
    size: "12313Mb"
},
{
    photoUrl: "https://tb.ziareromania.ro/Nicolae-Galatean--ultimul-drum-sau-ultimele-drumuri-/31abb567c33a05c0f3/400/225/2/100/Nicolae-Galatean--ultimul-drum-sau-ultimele-drumuri-.jpg",
    userId: 9458571,
    album: 1,
    size: "113Mb"
},
{
    photoUrl: "https://scontent.fcnd1-1.fna.fbcdn.net/v/t1.6435-9/118176597_2722331531370847_3617108178582416187_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGdk1ywfFfYMFisQAVp9iW4chGFURUsqlhyEYVRFSyqWPweLYqp__56ET3MHorlgJKAz3yHFgC0jBlOOMDb2lf_&_nc_ohc=ZCksKJYs8vIAX_W0qBM&_nc_oc=AQk7p55BoQp3hBu43g2dJlZ_PWfZNAwc66_RjcObdJIKY-fEevEHKByC_oppUdGUGOw&_nc_ht=scontent.fcnd1-1.fna&oh=00_AfCSMOoujqtUe5jFCuui2IJjtbX2PBIufVIIJbekS3dBUA&oe=642AB20E",
    userId: 9458510,
    album: 4,
    size: "13Mb"
},
];
let finalist = [];
let a = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (memberList[i].userId == photoList[j].userId && memberList[i].address.city != "Galati") {
            finalist[a++] = {
                fullname: memberList[i].name + " " + memberList[i].surname,
                positon: memberList[i].positon,
                isTeamLead: memberList[i].isTeamLead,
                phoneNumber: memberList[i].phoneNumber,
                email: memberList[i].emailAddress,
                address: memberList[i].address.city + ", " + memberList[i].address.street + ", NR" + memberList[i].address.nr,
                photoUrl: photoList[j].photoUrl
            }
            break;
        }
    }
}
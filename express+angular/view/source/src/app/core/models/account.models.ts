export class Account {
    id?: string;
    screen_name?: string;
    name?: string;
    profile_location?: string;
    created_at?: string;
    user_verified?: boolean;
    description?: string;
    profile_image_url?: string;
    followers_count?: number;
    friends_count?: number;
    statuses_count?: number;
    favourites_count?: number;
    screen_name_list?: AccountHistory[];
    profile_image_list?: AccountHistory[];
    profile_location_list?: AccountHistory[];
    name_list?: AccountHistory[];
    description_list?: AccountHistory[];
}

export class AccountHistory {
    value?: string;
    seen_at?: string;
}

export class Box {
    timer?: any;
    counter?: number;
    segment?: number;
    loaded?: boolean;
}





export const Accounts: Account[] = [
    {id: "949747355322126337", screen_name:"CGCSaudi", name:"التواصل الحكومي", profile_image_url:"https://pbs.twimg.com/profile_images/1594330418609782787/ApfaUY-X_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1168810187957919744", screen_name:"SDAIA_SA", name:"SDAIA", profile_image_url: "https://pbs.twimg.com/profile_images/1536665857279008771/eJyYxV58_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1376833165545897985", screen_name:"Tawakkalna_care", name:"تطبيق توكلنا - خدمة المستفيدين", profile_image_url:"https://pbs.twimg.com/profile_images/1379977904281505797/YAn3DbSA_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1246005840970219520", screen_name:"TawakkalnaApp", name:"تطبيق توكلنا", profile_image_url:"https://pbs.twimg.com/profile_images/1536665947985018880/ttyvyI_4_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "491190146", screen_name:"Absher", name:"أبشر", profile_image_url:"https://pbs.twimg.com/profile_images/877846577443983360/z7UIlMOz_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1030199192", screen_name:"SaudiHousing", name:"برنامج سكني", profile_image_url: "https://pbs.twimg.com/profile_images/1363488737615839236/EccHJX0r_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "2175598466", screen_name:"SaudiHousingCC", name:"العناية بالمستفيدين | سكني", profile_image_url:"https://pbs.twimg.com/profile_images/1529772928555966465/E-ZEYiWe_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1403269748", screen_name:"balady_gov", name:"منصة بلدي", profile_image_url:"https://pbs.twimg.com/profile_images/1315245961309032448/Pi55bfiH_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false},
    {id: "1363643975899492352", screen_name:"DgaGovSa", name:"هيئة الحكومة الرقمية", profile_image_url:"https://pbs.twimg.com/profile_images/1574102642019733506/a941Duti_normal.png", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: true},
    {id: "1284840382904360962", screen_name:"SDAIA_Care", name:"SDAIA_Care", profile_image_url:"https://pbs.twimg.com/profile_images/1284840516312616960/OaQ3QZ1o_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false}
];
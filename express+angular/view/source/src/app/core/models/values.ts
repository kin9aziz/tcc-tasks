 class Account {
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
    userId?: number;
}


class Tweet {
     content?: TweetContent[];
     total_count?: number;
}

class TweetContent {
    id?: string;
    type?: string;
    prelabel?: number;
    parent_tweet_id?: any;
    parent_user_screen_name?: any;
    user_screen_name?: string;
    user_display_name?: string;
    user_profile_image_url?: string;
    user_followers_count?: number;
    user_statuses_count?: number;
    user_location?: string;
    tweet_location_country?: string;
    tweet_location_city?: string;
    tweet_location_geo?: any;
    tweet_hashtags?: any[];
    tweet_urls?: any[];
    tweet_user_mentions?: string[];
    tweet_media_type?: any;
    tweet_media_url?: any;
    tweet_media_hash?: any;
    tweet_media_urls?: any[];
    tweet_body?: string;
    tweet_retweet_count?: number;
    tweet_favorite_count?: string;
    tweet_posted_time?: string;
    tweet_reply_to_id?: string;
    tweet_reply_to_user_id?: string;
    tweet_reply_to_user_screen_name?: any;
    quoted_tweet_id?: any;
    quoted_user_id?: any;
    quoted_user_screen_name?: any;
    tweet_emojis?: any;
    reply_count?: any;
    quote_count?: any;
    retweet_time?: any;
    available?: any;
    last_checked?: any;
    reply_chain?: any;
    user_verified?: boolean;
    user_id?: string;
    user_summary?: string;
    id_long?: number;
}

class AccountHistory {
    value?: string;
    seen_at?: string;
}

class Box {
    timer?: any;
    counter?: number;
    segment?: number;
    loaded?: boolean;
}

class Widget{
    tweets_count?: number;
    retweets_count?: number;
}

var Widgets: Widget = {
    tweets_count: 0,
    retweets_count: 0
};


const News = [
     {
         id: 1,
         tweet: "I am good person my friend",
         tweetIcon: "bx bxl-twitter",
         retweetIcon: "las la-retweet",
         retweet: [
             'I do not think so my friend',
             'hahah he is funny'
         ]

     },
    {
        id: 2,
        tweet: "Any one know anything about saudi arabia",
        tweetIcon: "bx bxl-twitter",
        retweetIcon: "las la-retweet",
        retweet: [
            'No we do not know please tell us',
            'we are waiting hurry up'
        ]

    },
 ];


const Accounts: Account[] = [
    {id: "949747355322126337", screen_name:"CGCSaudi", name:"التواصل الحكومي", profile_image_url:"https://pbs.twimg.com/profile_images/1598245243031371776/qhvd78SQ_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1168810187957919744", screen_name:"SDAIA_SA", name:"SDAIA", profile_image_url: "https://pbs.twimg.com/profile_images/1536665857279008771/eJyYxV58_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1376833165545897985", screen_name:"Tawakkalna_care", name:"تطبيق توكلنا - خدمة المستفيدين", profile_image_url:"https://pbs.twimg.com/profile_images/1379977904281505797/YAn3DbSA_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1246005840970219520", screen_name:"TawakkalnaApp", name:"تطبيق توكلنا", profile_image_url:"https://pbs.twimg.com/profile_images/1536665947985018880/ttyvyI_4_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "491190146", screen_name:"Absher", name:"أبشر", profile_image_url:"https://pbs.twimg.com/profile_images/877846577443983360/z7UIlMOz_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1030199192", screen_name:"SaudiHousing", name:"برنامج سكني", profile_image_url: "https://pbs.twimg.com/profile_images/1363488737615839236/EccHJX0r_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "2175598466", screen_name:"SaudiHousingCC", name:"العناية بالمستفيدين | سكني", profile_image_url:"https://pbs.twimg.com/profile_images/1529772928555966465/E-ZEYiWe_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1403269748", screen_name:"balady_gov", name:"منصة بلدي", profile_image_url:"https://pbs.twimg.com/profile_images/1315245961309032448/Pi55bfiH_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "1363643975899492352", screen_name:"DgaGovSa", name:"هيئة الحكومة الرقمية", profile_image_url:"https://pbs.twimg.com/profile_images/1574102642019733506/a941Duti_normal.png", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: true, userId: 1},
    {id: "1284840382904360962", screen_name:"SDAIA_Care", name:"SDAIA_Care", profile_image_url:"https://pbs.twimg.com/profile_images/1284840516312616960/OaQ3QZ1o_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 1},
    {id: "280890027", screen_name:"alhasamunicipal", name: "أمانة الأحساء", profile_image_url:"https://pbs.twimg.com/profile_images/1449386017832808454/u8cZpj0z_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "603567192", screen_name:"asirmunicipal", name: "أمانة منطقة عسير", profile_image_url:"https://pbs.twimg.com/profile_images/1334528912735543302/_8Q1vBku_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "467247226", screen_name:"amantalbaha", name: "أمانة منطقة الباحة", profile_image_url:"https://pbs.twimg.com/profile_images/1592212200118259713/i5ZjmtnW_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "275552943", screen_name:"EasternEamana", name: "أمانة المنطقة الشرقية", profile_image_url:"https://pbs.twimg.com/profile_images/1338576761387446281/uXpEAh7s_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "917673870345326593", screen_name:"HafrbatinAmana", name: "أمانة حفر الباطن", profile_image_url:"https://pbs.twimg.com/profile_images/1119148527676825603/n7XPSkfl_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "1639180526", screen_name:"Amanat_Hail", name: "أمانة منطقة حائل", profile_image_url:"https://pbs.twimg.com/profile_images/1572456533895659520/ls5bdCRE_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "110248473", screen_name:"jazansa", name: "أمانة منطقة جازان", profile_image_url:"https://pbs.twimg.com/profile_images/757894388131528708/BAca7_4N_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "58427580", screen_name:"JeddahAmanah", name: "أمانة محافظة جدة", profile_image_url:"https://pbs.twimg.com/profile_images/1587793978803503105/tRV3J2p0_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "120245656", screen_name:"amanataljouf", name: "أمانة منطقة الجوف", profile_image_url:"https://pbs.twimg.com/profile_images/1575042574167023616/4VZERAqF_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "386747404", screen_name:"AmanaAlmadinah", name: "أمانة منطقة المدينة المنورة", profile_image_url:"https://pbs.twimg.com/profile_images/1356649796686217222/E0kD-hUC_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "105601959", screen_name:"holymakkah", name: "أمانة العاصمة المقدسة", profile_image_url:"https://pbs.twimg.com/profile_images/1311627126685265922/RI3y-mHP_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "412181682", screen_name:"NajranMunicipal", name: "أمانة منطقة نجران", profile_image_url:"https://pbs.twimg.com/profile_images/1491299268191260675/BvMz7Z4I_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "1391454481", screen_name:"AmantAlshmmalya", name: "أمانة منطقة الحدود الشمالية", profile_image_url:"https://pbs.twimg.com/profile_images/1576451856611643394/FNGysJsi_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "116388992", screen_name:"Qassimmun", name: "أمانة منطقة القصيم", profile_image_url:"https://pbs.twimg.com/profile_images/1575480371143217154/0XuUkdQm_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "144127698", screen_name:"Amanatalriyadh", name: "أمانة منطقة الرياض", profile_image_url:"https://pbs.twimg.com/profile_images/1201080673815191554/sl1DYNVg_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "253272941", screen_name:"tabukm", name: "أمانة منطقة تبوك", profile_image_url:"https://pbs.twimg.com/profile_images/1604551097724674056/LNsK_Z7q_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "4284966023", screen_name:"tc_gov", name: "أمانة الطائف", profile_image_url:"https://pbs.twimg.com/profile_images/1338360676264316928/BcZ3euVF_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},
    {id: "490074932", screen_name:"saudimomrah", name: "وزارة الشؤون البلدية والقروية والإسكان", profile_image_url:"https://pbs.twimg.com/profile_images/1403303388482347008/1BFeJMQL_normal.jpg", followers_count: 0, statuses_count: 0, friends_count: 0, user_verified: false, userId: 2},

];

interface ChartType {
     chart?: any;
     plotOptions?: any;
     colors?: any;
     series?: any;
     fill?: any;
     dataLabels?: any;
     legend?: any;
     xaxis?: any;
     stroke?: any;
     labels?: any;
     markers?: any;
     yaxis?: any;
     tooltip?: any;
     grid?: any;
     title?: any;
     responsive?: any;
 }

export { News, Accounts, Account, AccountHistory, Widgets, ChartType, Tweet, TweetContent };

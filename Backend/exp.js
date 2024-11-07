const data = [
    {
        "Place": "Goa",
        "Details": "Goa is known for its beautiful beaches, vibrant nightlife, and rich Portuguese heritage. It's a popular destination for tourists seeking sun, sand, and sea, as well as adventure sports and cultural experiences.",
        "Pictures": {
            "pic1": "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
            "pic2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyi8_9OHutdrIOZt8m9S2GwaN4VbJIWf3wpQ&s",
            "pic3": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481391311.jpg?k=e71d9b8260e5031da1bc65e622e29eac93dbea9106cff7d74bd715ce7e1b7fef&o=&hp=1"
        },
        "Price": 6000
    },
    {
        "Place": "Manali",
        "Details": "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It’s a popular backpacking center and honeymoon destination, known for its cool climate and snow-capped mountains offering activities like skiing, paragliding, and trekking.",
        "Pictures": {
            "pic1": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp",
            "pic2": "https://www.indiadrivertours.com/wp-content/uploads/2017/06/tpkg-manalitour.jpg",
            "pic3": "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_3600,h_2025,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/renest-river-country-resort-manali/Renest_Manali_00014_tmou4p"
        },
        "Price": 8000
    },
    {
        "Place": "Maldives",
        "Details": "The Maldives is a tropical paradise in the Indian Ocean, known for its crystal-clear waters, overwater bungalows, and vibrant marine life. It's a top destination for luxury travel, scuba diving, and romantic getaways.",
        "Pictures": {
            "pic1": "https://www.ahstatic.com/photos/b986_ho_00_p_1024x768.jpg",
            "pic2": "https://afar.brightspotcdn.com/dims4/default/dd4ced2/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
            "pic3": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/397483443.jpg?k=4c09f5cfbde876a466a31d36ce365384e3aa89059bbd1ba971281f06b534e578&o=&hp=1"
        },
        "Price": 9000
    },
    {
        "Place": "Sikkim",
        "Details": "Sikkim is a state in northeastern India, known for its dramatic landscape, which includes India’s highest mountain, Kangchenjunga. It’s a land of monasteries, scenic trekking routes, and vibrant Tibetan Buddhist culture.",
        "Pictures": {
            "pic1": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg/1200px-Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg",
            "pic2": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/11/Sikkim-Coolest-Places-min.jpg?fit=1200%2C676&ssl=1",
            "pic3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmTfjz-0CfGRPaoePoYiLoDyL0y6Okr-g6g&s"
        },
        "Price": 10000
    },
    {
        "Place": "Kolkata",
        "Details": "Kolkata, the capital of West Bengal, is a vibrant city known for its colonial architecture, cultural festivals, and delicious cuisine. It’s also home to notable landmarks such as the Victoria Memorial and Howrah Bridge.",
        "Pictures": {
            "pic1": "https://lp-cms-production.imgix.net/2019-06/GettyImages-143559567_high.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
            "pic2": "https://i.ytimg.com/vi/KzB4INNsGWA/hqdefault.jpg",
            "pic3": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/32/15/the-oberoi-grand-kolkata.jpg?w=1200&h=-1&s=1"
        },
        "Price": 5000
    },
    {
        "Place": "Kedarnath",
        "Details": "Kedarnath is a town in the Indian state of Uttarakhand and a major Hindu pilgrimage site. It's home to the Kedarnath Temple, one of the holiest shrines dedicated to Lord Shiva, surrounded by breathtaking Himalayan scenery.",
        "Pictures": {
            "pic1": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489060001.jpg?k=76a3b497500f9da1fdb7e70c8ae4f0c2e7236a3366d8ab4be3e2eef65cf84465&o=&hp=1",
            "pic2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArmtBam6dAdSqw_pgqdXUSd2KN1AK1iGW9g&s",
            "pic3": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b8/b5/dd/fb-img-1488600988358.jpg?w=1200&h=-1&s=1"
        },
        "Price": 7000
    },
    {
        "Place": "Sundarban",
        "Details": "The Sundarban is a vast forest in the coastal region of the Bay of Bengal, renowned for its unique mangrove ecosystem and home to the Royal Bengal tiger. It's a UNESCO World Heritage Site and a prime destination for wildlife enthusiasts.",
        "Pictures": {
            "pic1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqJ99Zb7NrnHfN8if-vrFEmFLXzaD0exC-Q&s",
            "pic2": "https://i.pinimg.com/originals/35/a8/d9/35a8d9491d538e6aeb4df6fa026ba7c6.jpg",
            "pic3": "https://media.licdn.com/dms/image/D5612AQHA6VjfnXb_kg/article-cover_image-shrink_600_2000/0/1711017565375?e=2147483647&v=beta&t=C_LNpaZH3yWM9tXrSMuXyYZSdqAjYk06AwcNsGr926U"
        },
        "Price": 5000
    },
    {
        "Place": "Varanasi",
        "Details": "Varanasi, also known as Kashi, is a major religious hub in India, famous for its ghats along the River Ganges where rituals and ceremonies are performed daily. It’s a city that offers a unique blend of spirituality, history, and culture.",
        "Pictures": {
            "pic1": "https://cdn.abhibus.com/2024/02/Top-Things-to-Do-in-Varanasi.jpg",
            "pic2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXogNdusIjDGDUIgvd62MI4ZASqqLOWlP9Q&s",
            "pic3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFWwT4cVx_Kd69lQlZ7OtHoQJS1sXhp8RiQ&s"
        },
        "Price": 5000
    },
    {
        "Place": "Ladakh",
        "Details": "Ladakh, a region in northern India, is renowned for its stunning landscapes, high-altitude deserts, and Buddhist monasteries. It’s an adventure seeker’s paradise offering activities like trekking, river rafting, and motorbiking.",
        "Pictures": {
            "pic1": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Shyok_river_Ladakh.jpg/250px-Shyok_river_Ladakh.jpg",
            "pic2": "https://www.prabhatkhabar.com/wp-content/uploads/2024/02/o-1.jpg",
            "pic3": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/58/50/2c/the-abduz.jpg?w=1200&h=-1&s=1"
        },
        "Price": 9000
    },
    {
        "Place": "Darjeeling",
        "Details": "Darjeeling is a town in the Indian state of West Bengal, known for its tea plantations, scenic views of the Himalayas, and the Darjeeling Himalayan Railway. It’s a popular hill station offering a mix of natural beauty and colonial charm.",
        "Pictures": {
            "pic1": "https://www.savaari.com/blog/wp-content/uploads/2022/02/photo-1622308644420-b20142dc993c.jpg",
            "pic2": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/DarjeelingTrainFruitshop_%282%29.jpg/1200px-DarjeelingTrainFruitshop_%282%29.jpg",
            "pic3": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/11/2d/1a/caption.jpg?w=1200&h=-1&s=1"
        },
        "Price": 8000
    }
];

data.forEach((data)=>{
    Array.of(data.Place).map((data)=>{
          console.log(data)
    })
})
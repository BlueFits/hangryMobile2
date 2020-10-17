import Restaurant from "../models/Restaurant";
import Menu from "../models/Menu";
import Item from "../models/Item";

const RESTAURANTS = [
    new Restaurant(
        "1",
        "DummyTaurant",
        "test addy 1",
        "111-111-1111",
        "https://i.imgur.com/CUG0Aof.jpg",
        "instagram/someting",
        "www.test.com",
        "pizza",
        "One of a kind promise you'll love it.",
        new Menu(
            "1",
            [
                new Item(
                    "1", 
                    "French Maddys", 
                    "Delicously made",
                    "Our beautifully crafted maddys are baked fresh daily, and created with strawberry cream, ready to die for.",
                    9.99,
                    true,
                    ),
                new Item(
                    "2", 
                    "Dirty Dough", 
                    "I promise its good",
                    "Made for the extremist of extremist, requires great will to overcome the one of a kind taste.",
                    10.99,
                    false,
                    ),
            ],
            [
                new Item(
                    "1", 
                    "French Maddys", 
                    "Delicously made",
                    "Our beautifully crafted maddys are baked fresh daily, and created with strawberry cream, ready to die for.",
                    9.99,
                    true,
                    ),
                new Item(
                    "2", 
                    "Dirty Dough", 
                    "I promise its good",
                    "Made for the extremist of extremist, requires great will to overcome the one of a kind taste.",
                    10.99,
                    false,
                    ),
            ],
        ),
    ),
    new Restaurant(
        "2",
        "DummyTaurant2",
        "test addy 2",
        "111-111-1111",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "instagram.com/somewhere",
        "www.test2.com",
        "dessert"
    ),
    new Restaurant(
        "3",
        "DummyTaurant3",
        "test addy 2",
        "111-111-1111",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "instagram.com/somewhere",
        "www.test2.com",
        "dessert"
    ),
];

export default RESTAURANTS;
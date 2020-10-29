import Restaurant from "../models/Restaurant";
import Menu from "../models/Menu";
import Item from "../models/Item";

import itemImageA from '../assets/images/deserts.jpeg'

const RESTAURANTS = [
    new Restaurant(
        "1",
        "Loading",
        "",
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
                    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80",
                    ),
                new Item(
                    "2", 
                    "Dirty Dough", 
                    "I promise its good",
                    "Made for the extremist of extremist, requires great will to overcome the one of a kind taste.",
                    10.99,
                    false,
                    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    ),
            ],
            [
                new Item(
                    "2", 
                    "Killy", 
                    "I promise its good",
                    "Made for the extremist of extremist, requires great will to overcome the one of a kind taste.",
                    10.99,
                    false,
                    "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/bfinzajl7cvvkqwagzxz/killy-toronto-surrender",
                    ),
            ],
            [
                new Item(
                    "2", 
                    "Killy", 
                    "I promise its good",
                    "Made for the extremist of extremist, requires great will to overcome the one of a kind taste.",
                    10.99,
                    false,
                    ),
            ],
            [
                new Item(
                    "2", 
                    "Killy", 
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
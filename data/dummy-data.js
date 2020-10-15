import Restaurant from "../models/Restaurant";

const RESTAURANTS = [
    new Restaurant(
        1,
        "DummyTaurant",
        "test addy 1",
        "111-111-1111",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "instagram/someting",
        "www.test.com",
        "Pizza"
    ),
    new Restaurant(
        2,
        "DummyTaurant2",
        "test addy 2",
        "111-111-1111",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "instagram.com/somewhere",
        "www.test2.com",
        "Desserts"
    ),
];

export default RESTAURANTS;
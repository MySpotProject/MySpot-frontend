import React, { useEffect, useState } from "react";
import TutorialCard from "@/components/TutorialCard/tutorialCard";
import Spacer from "@/components/UI/spacer/spacer";
import Pagination from "@/components/UI/Pagination/pagination";
import Head from "next/head";
import Search from "@/components/Search/search";
import instance from "../../instanceAxios";
import axios from "axios";

const mockCards = [
    {
        image: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        title: "Олли",
        slug: "/ollie",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
        slug: "ollie",
        title: "Толик",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
        slug: "ollie",
        title: "Dubstep",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },

    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
    {
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        slug: "ollie",
        title: "Ноу Комплай",
        descr: "чтобы выполнить этот прыжок, нужно одновременно с щелчком, или за доли секунды до него, убрать выводящую ногу с доски на землю, одновременно с этим щёлкающей ногой вытягивая Олли, а второй отталкиваясь от земли. Разумеется, засчитать трюк можно, если скейтбордист приземлится обеими ногами на доску и поедет. Заметно популярнее этот трюк в связке с Ванэйти. Помимо Олли, механику Ноу Комплая можно использовать и для более сложных трюков.",
    },
];

export default function index({ data }) {
    const [tricks, setTricks] = useState(data);
    console.log(tricks);

    const [fetching, setFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(9);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
            100
        ) {
            setFetching(true);
            setTimeout(() => {
                setFetching(false);
            }, 200);
        }
    };

    useEffect(() => {
        if (fetching) {
            setTimeout(() => {
                setCurrentPage((prev) => prev + 9);
            }, 500);
        }
    }, [fetching]);

    return (
        <>
            <Head>
                <title>MY SPOT | TRICKS</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta property="og:title" content="MY SPOT" key="title" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="144x144"
                    href="/icon.svg"
                />
                <script
                    src="https://api-maps.yandex.ru/3.0/?apikey=7066165f-a263-468f-9123-b4a3a32bdfb3&lang=ru_RU"
                    type="text/javascript"
                ></script>
            </Head>
            <div className="main__height main__wrapper">
                <Spacer size={"xl"} />
                <div className={"filter"}>
                    <h1>ТРЮКИ —</h1>
                    <Search data={tricks} placeholder="Поиск" />
                </div>
                <Spacer size={"md"} />
                <div className={"cards"}>
                    {tricks?.slice(0, currentPage).map((item) => (
                        <TutorialCard
                            slug={"tricks/" + item?.slug}
                            title={item.title}
                            // descr={item.descr}
                            image={item.images[0]}
                        />
                    ))}
                </div>
                {/* <Spacer size={"md"} /> */}
                {/* <Pagination /> */}
                <Spacer size={"xl"} />
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    try {
        const tricks = await axios
            .get(process.env.NEXT_PUBLIC_API + "/api/tricks.json")
            .then((response) => response?.data);

        return {
            props: {
                data: tricks,
            },
        };
    } catch (error) {
        return { redirect: { destination: "/", permanent: false } };
    }
}

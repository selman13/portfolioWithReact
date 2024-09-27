import { create } from "zustand";

export const useMyData =  create((set) => ({
    myData : {
        firstName: 'Selman',
        lastName: 'Aliyev',
        profilePhoto: '/profile.png',
        department: 'Web Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque',
        proffesionalSkill: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque',
        skills: [
            {id:0, name: 'html', percent: 90},
            {id:1, name: 'css', percent: 80},
            {id:2, name: 'javascript', percent: 70},
            {id:3, name: 'ux/ui', percent: 60}
        ]
    }
}))

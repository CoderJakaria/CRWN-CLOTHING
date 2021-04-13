const INITIAL_STATE = {
    sections : [{
        title:'hats',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkUrl:'shop/hats'
    },
    {
        title:'Jackets',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl:'shop/jackets'
    },
    {
        title:'Sneakers',
        imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl:'shop/sneakers'
    },
    {
        title:'Womens',
        imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
        id:4,
        linkUrl:'shop/womens',
        size:'large'
    },
    {
        title:'Mens',
        imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
        id:5,
        linkUrl:'shop/mens',
        size:'large'
    }
]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer;
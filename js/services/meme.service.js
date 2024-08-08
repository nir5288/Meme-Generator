'use strict'


let gImgs = [
    { id: makeId(), url: 'images/1.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/2.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/3.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/5.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/6.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/4.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/7.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/8.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/9.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/10.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/11.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/12.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/13.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/14.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/15.jpg', keywords: ['funny', 'politics'] },
    { id: makeId(), url: 'images/16.jpg', keywords: ['funny', 'politics'] },
]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = {
    'funny': 12,
    'cat': 16,
    'baby': 2
}
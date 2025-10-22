const masterList = [
    {
        id: 0, 
        title: 'Blog', 
        description: 'This page is a placeholder for the blog site.', 
        date: '',
        images: [
            {id: 0, url: '#', placeholder: 'Placeholder image.'},
            {id: 1, url: '#', placeholder: 'Placeholder image.'}
        ],
        content: [
            {id: 0, type: 'paragraph', content: `This is an example introductory paragraph with content similar to the description. This whole thing in general will be a fun project to do, if I can figure out how to make it more enjoyable...`},
            {id: 1, type: 'paragraph', content: `This is an example paragraph of content for a post. I wanted to be able to do a somewhat modular style build for the site so I could just modify one file and then the site would be able to auto-generate a card and a blog page based on that file. In the long-term, I'll probably end up doing something with databases`},
            {id: 2, type: 'code', content: `print('Hello World!')`},
            {id: 3, type: 'paragraph', content: `Hopefully this idea works, so I can consolidate everything into a single file and decrease the loadtime.`}
        ],
        outline: 
        `paragraph, image, paragraph, code paragraph`
    },
    {
        id: 1,
        title: 'Placeholder',
        description: '',
        date: '',
        images: [
            { id: 0, url: '#', placeholder: '' },
            { id: 1, url: '#', placeholder: '' }
        ],
        content: [
            { id: 0, type: 'paragraph', content: 'Placeholder' },
            { id: 1, type: 'code', content: `print('Hello World!')` }
        ],
        outline:
            ``
    }
]

const cardListTemplate = [
    {
        id: 0,
        title: 'Placeholder',
        description: '',
        date: '',
        thumbnail: {id: 0, url: '#', placeholder: ''}
    },
    {
        id: 1,
        title: 'Placeholder',
        description: '',
        date: '',
        thumbnail: { id: 0, url: '#', placeholder: '' }
    }
]


/**
 * Maps a detailed blog post object to a simplified card data object.
 * @param {object} masterPost - The complete source blog post object.
 * @returns {object} A simplified data object with id, title, excerpt, and thumbnail.
 */
const mapPostToCard = ({ id, title, description, images, content }) => {
    // 1. Determine the excerpt (first paragraph content or description fallback)
    const excerptText = content?.find(item => item.type === 'paragraph')?.content
        || description
        || 'No summary available.';

    // 2. Determine the thumbnail (first image or default)
    const firstImage = images?.[0];

    const thumbnailData = firstImage
        ? { id: firstImage.id || 0, url: firstImage.url || '#', placeholder: firstImage.placeholder || '' }
        : { id: 0, url: '#', placeholder: 'Placeholder' };

    // 3. Return the simplified object
    return {
        id: id || 0,
        title: title || 'Untitled Post',
        excerpt: excerptText,
        thumbnail: thumbnailData
    };
};

// List of posts -> List of cards
const createCardList = (masterList) => masterList.map(mapPostToCard);

const cardList = createCardList(masterList)
console.log(cardList)

function getBlogPost() {

}
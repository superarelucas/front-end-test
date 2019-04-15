window.addEventListener('DOMContentLoaded', function(event) {

    var works = new Vue({
        el: '#works',
        data: function() {
            return {
                categories: [
                    {
                        id: 'all',
                        name: 'All'
                    },
                    {
                        id: 'branding',
                        name: 'Branding'
                    },
                    {
                        id: 'web',
                        name: 'Web'
                    },
                    {
                        id: 'design',
                        name: 'Design'
                    },
                    {
                        id: 'photography',
                        name: 'Photography'
                    }
                ],
                active: 'all',
                works: [
                    {
                        url: '#',
                        title: 'Labore et dolore magnam',
                        category: 'web',
                        image: '../images/works-01.png',
                    },
                    {
                        url: '#',
                        title: 'Interdum et malesuada fames',
                        category: 'design',
                        image: '../images/works-02.png',
                    },
                    {
                        url: '#',
                        title: 'Etiam in metus',
                        category: 'photography',
                        image: '../images/works-03.png',
                    },
                    {
                        url: '#',
                        title: 'Aliquam vehicula ante',
                        category: 'branding',
                        image: '../images/works-04.png',
                    },
                    {
                        url: '#',
                        title: 'Labore et dolore magnam',
                        category: 'photography',
                        image: '../images/works-05.png',
                    },
                    {
                        url: '#',
                        title: 'Labore et dolore magnam',
                        category: 'branding',
                        image: '../images/works-06.png',
                    },
                    {
                        url: '#',
                        title: 'Phasellus imperdiet',
                        category: 'photography',
                        image: '../images/works-07.png',
                    },
                    {
                        url: '#',
                        title: 'Sed quis dui massa',
                        category: 'design',
                        image: '../images/works-08.png',
                    }
                ]
            }
        }
    })
})

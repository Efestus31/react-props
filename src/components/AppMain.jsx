import Card from './card/Card.jsx'
import posts from '../data/posts.js'

export default function AppMain() {




    return (
        <main>
            <div className="container">
                {posts.filter(post => post.published).map(post => (
                    <Card
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags.map((tag, index) => (
                            <span key={index} className="tag" style={{ backgroundColor: getTagColor(tag) }}>
                                {tag}
                            </span>
                        ))}
                    />
                ))}
            </div>
        </main >
    )
}
function getTagColor(tag) {
    const colors = {
        html: '#4CAF50',
        css: '#FF4081',
        js: '#FF9800',
        php: '#00796B',
    };


    return colors[tag] || '#9E9E9E';
}

export default function PostBody({ content }) {
    return (
        <div className="line-numbers shadow-lg rounded-lg p-5 ">
            <div  className="prose" dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
    )
}
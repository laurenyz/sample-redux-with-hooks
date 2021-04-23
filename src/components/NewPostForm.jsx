import React, { useState } from 'react'

export default function NewPostForm() {
    const [text, setText] = useState("")

    const handleOnSubmit = event => {
        event.preventDefault()
        console.log(text)
    }

    return (
        <div>
            <h2>New Post Form:</h2>
            <form onSubmit={handleOnSubmit}>
                <textarea
                    placeholder="Post Content..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                >
                </textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

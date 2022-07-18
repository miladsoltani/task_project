import  { useEffect } from 'react';

const Title = title => {
    return (
        useEffect(()=>{
            document.title = title
        })
    )
}

export default Title;
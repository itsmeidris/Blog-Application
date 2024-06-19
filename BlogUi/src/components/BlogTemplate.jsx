/* eslint-disable react/prop-types */
function BlogTemplate(props) {
  return (
    <div className='border-2 border-myBlack rounded-md p-2 m-3 bg-myBlack text-myWhite w-fit'>
        <h1 className='text-3xl my-2'>{props.title}</h1>
        <div>
          <p className='bg-myWhite text-myBlack rounded-md p-3 my-2 w-fit'>{props.description}</p>
          <img src={props.blogImage} className="w-[25vw] h-auto rounded-md"/>
        </div>
        <p className='my-2'>By : <span className='border-b-2'>{props.author}</span></p>
    </div>    
  )
}

export default BlogTemplate

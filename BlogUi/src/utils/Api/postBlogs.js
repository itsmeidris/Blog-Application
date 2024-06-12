import axios from 'axios';

const postData = async (title, description, author) => {
    try {
      const response = await axios.post(`http://localhost:1368/blogs/create`, {
        title,
        description,
        author,
      });
      
      if (response.status === 201) {
        console.log('Blog created successfully.');
        return true;
      } else {
        console.log('Error creating blog');
        console.log(response.data); // Log the error response
        throw new Error('Error creating blog');
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data && e.response.data.errors) {
        // Extract the validation errors from the response
        const { errors } = e.response.data;
        throw new Error(`Validation errors: ${Object.values(errors).join(', ')}`);
      } else {
        throw e;
      }
    }
  };

export default postData;
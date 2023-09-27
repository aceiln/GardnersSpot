document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    
    deleteButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const postId = button.getAttribute('data-post-id');
        
        try {
          // Send a DELETE request to the server
          const response = await fetch(`/post/delete/${postId}`, {
            method: 'DELETE',
          });
  
          if (response.status === 204) {
            // Successfully deleted; remove the post from the UI
            button.closest('.post').remove();
          } else {
            // Handle the case where deletion was not successful
            console.error('Failed to delete post');
          }
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      });
    });
  });
// node modules
import { useState } from 'react';

// local files
import { IFormInput } from '../components/CommentForm';

/**
 * Custom hook that handle create comment service
 * With laoding feature
 */
function useCreateComment() {
  // state
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // event
  const handleCreateComment = (data: IFormInput) => {
    setIsLoading(true);
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsCreated(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isCreated, isLoading, handleCreateComment };
}

export default useCreateComment;

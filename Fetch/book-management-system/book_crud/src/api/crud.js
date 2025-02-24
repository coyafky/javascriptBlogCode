const BASE_URL = '/api';  

async function fetchBooks() {
    const url = `${BASE_URL}/books`;
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return data;
}

async function fetchBook(id) {
    const url = `${BASE_URL}/books/${id}`;
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Failed to fetch book');
    }
    const data = await response.json();
    return data;
}

async function createBook(book) {
    const url = `${BASE_URL}/books`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(book)
    });
    if(!response.ok) {
        throw new Error('Failed to create book');
    }
    const data = await response.json();
    return data;
}

async function updateBook(id, book) {
    const url = `${BASE_URL}/books/${id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if(!response.ok) {
        throw new Error('Failed to update book');
    }
    const data = await response.json();
    return data;
}

async function deleteBook(id) {
    const url = `${BASE_URL}/books/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    if(!response.ok) {
        throw new Error('Failed to delete book');
    }
}

export {
    fetchBooks,
    fetchBook,
    createBook,
    updateBook,
    deleteBook
};
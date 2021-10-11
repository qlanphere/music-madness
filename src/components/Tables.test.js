import { render, screen } from '@testing-library/react';
import Like from './Like'
import App from '../App'

test('like button changes onClick', () => {
    render(<Like color = 'table-success'song='Party in the USA' artist = "Miley Cyrus" link = "https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr?si=e52d0e7972b04f14"/>);
    const likeElement = screen.getByTestId("span")
    expect(likeElement).toBeInTheDocument();
})
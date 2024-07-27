import { getCurrrentuser, session } from '../../lib/session';
import * as jest from 'jest';

describe('getCurrentUser', () => {
    it('should return the current user', () => {
        const currentUser = {
            id: '123',
            name: 'John Doe',
            email: 'john@example.com',
        };

        jest.spyOn(session, 'getCurrentUser').mockImplementation(() => currentUser);

        // Call the getCurrentUser function
        const result = getCurrentUser();

        // Assert that the result is equal to the expected current user object
        expect(result).toEqual(currentUser);
    });
});

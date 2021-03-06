import AngularApiUtil from './angular-api.util';

describe('Handle Angular APIs', () => {
    it('should detect it', async () => {
        const API_TO_FIND = 'HttpClientModule';
        const apiFound = AngularApiUtil.findApi(API_TO_FIND);
        expect(apiFound).toEqual(
            expect.objectContaining({
                data: expect.objectContaining({
                    path: 'api/common/http/HttpClientModule'
                })
            })
        );
    });
});

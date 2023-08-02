export const config = {
    s3baseUrl: 'https://explorelikealocal.s3.us-east-2.amazonaws.com/atlanta/',
    mapBoxGlAccessToken: 'pk.eyJ1Ijoibmh1bnQzIiwiYSI6ImNrdm8zaG1hZzN1cnEzMHAxMWR1NGhkNnAifQ.5lKcGQnZdVBGgG50h5pZvA'
};

export const getBaseUrl = () => {
    // if (import.meta.env.DEV) {
    //     return 'http://localhost:3001';
    // } else {
        return 'https://h4y3acvn2k.execute-api.us-east-1.amazonaws.com/prod/explore';
    // }
};

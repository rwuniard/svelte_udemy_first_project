<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    const meetups = [
        {
            id: 'm1',
            title: 'Coding bootcamp',
            subtitle: 'learning how to code',
            description: 'meeting on how to code',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png',
            address: '3200 street, New York 21223',
            email: 'something@meetups.com',
        },
        {
            id: 'm2',
            title: 'Swimming bootcamp',
            subtitle: 'learning how to swim',
            description: 'meeting on how to swim',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_1280.jpg',
            address: '110 street, Atlanta 32203',
            email: 'swimming@meetups.com',
        },
    ];
</script>

<Header />
<main>
    <MeetupGrid {meetups} />
</main>

<style>
    main {
        margin-top: 5rem;
    }
</style>

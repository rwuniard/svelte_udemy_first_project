<script>
    import Header from './UI/Header.svelte';
    import MeetupItem from './Meetups/MeetupItem.svelte';

    const meetups = [
        {
            id: 'm1',
            title: 'Coding bootcamp',
            subtitle: 'learning how to code',
            description: 'meeting on how to code',
            imageUrl: 'http://blabla.com/image.jpg',
            address: '3200 street, New York 21223',
            email: 'something@meetups.com',
        },
        {
            id: 'm2',
            title: 'Swimming bootcamp',
            subtitle: 'learning how to swim',
            description: 'meeting on how to swim',
            imageUrl: 'http://blabla.com/image.jpg',
            address: '110 street, Atlanta 32203',
            email: 'swimming@meetups.com',
        },
    ];
</script>

<Header />
<section id="meetups">
    {#each meetups as meetupitem}
        <MeetupItem
            title={meetupitem.title}
            subtitle={meetupitem.subtitle}
            address={meetupitem.address}
            imageUrl={meetupitem.imageUrl}
            description={meetupitem.imageUrl}
            email={meetupitem.email}
        />
    {/each}
</section>

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

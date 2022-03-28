<script>
    import MeetupItem from './MeetupItem.svelte';
    export let meetups;
</script>

<section id="meetups">
    {#each meetups as meetupitem}
        <MeetupItem
            title={meetupitem.title}
            subtitle={meetupitem.subtitle}
            address={meetupitem.address}
            imageUrl={meetupitem.imageUrl}
            description={meetupitem.description}
            email={meetupitem.email}
        />
    {/each}
</section>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

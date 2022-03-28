<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import TextInput from './UI/TextInput.svelte';
    import Button from './UI/Button.svelte';

    let title = '';
    let description = '';
    let subtitle = '';
    let imageUrl = '';
    let address = '';
    let email = '';

    let meetups = [
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

    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            address: address,
            email: email,
        };

        // meetups.push(newMeetup); // THis doesn't work, since we need = to make Svelte to udpate DOM
        meetups = [newMeetup, ...meetups];
    }
</script>

<Header />
<main>
    <form on:submit|preventDefault={addMeetup}>
        <TextInput id="title" label="Title" value={title} on:input={(event) => (title = event.target.value)} />
        <!-- <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title} />
        </div> -->

        <TextInput
            id="subtitle"
            label="Subtitle"
            value={subtitle}
            controlType="text"
            on:input={(event) => (subtitle = event.target.value)}
        />
        <TextInput
            id="description"
            label="Description"
            value={description}
            controlType="textarea"
            rows="3"
            on:input={(event) => (description = event.target.value)}
        />

        <TextInput
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            controlType="text"
            on:input={(event) => (imageUrl = event.target.value)}
        />
        <TextInput
            id="address"
            label="Address"
            value={address}
            controlType="text"
            on:input={(event) => (address = event.target.value)}
        />
        <TextInput
            id="email"
            label="E-Mail"
            value={email}
            controlType="email"
            on:input={(event) => (email = event.target.value)}
        />
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid {meetups} />
</main>

<style>
    main {
        margin-top: 5rem;
    }
    form {
        width: 30rem;
        max-width: 90%;
    }
</style>

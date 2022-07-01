module.exports = async interaction => {
    //? Returns all options that are not selected
    const removed = interaction.component.options.filter(option => {
        return !interaction.values.includes(option.value);
    });

    //? Removes every role that isn't selected
    for(const id of removed) {
        interaction.member.roles.remove(id.value);
    }

    //? Adds every role that is selected
    for(const id of interaction.values) {
        interaction.member.roles.add(id);
    }

    //? To get rid of the "Interaction failed" error message
    interaction.deferUpdate();
}
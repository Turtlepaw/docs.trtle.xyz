## Checking a scam URL with Discord.js
We will be using [Discord.js](https://discord.js.org/) to create a bot to check the scam URL.

<DiscordMessages>
	<DiscordMessage profile="bot">
		<template #interactions>
			<DiscordInteraction profile="user" :command="true">check</DiscordInteraction>
		</template>
		<DiscordEmbed
            border-color="#5865f2"
            embed-title="Result"
            image="/scam.jpeg"
        >
            				<template #fields>
					<DiscordEmbedFields>
						<DiscordEmbedField field-title="Scam">
							false
						</DiscordEmbedField>
                        <DiscordEmbedField field-title="Type">
							DiscordRelated
						</DiscordEmbedField>
					</DiscordEmbedFields>
				</template>
        </DiscordEmbed>
	</DiscordMessage>
</DiscordMessages>
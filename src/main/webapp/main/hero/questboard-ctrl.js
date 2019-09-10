app.controller('QuestboardCtrl', function ($scope) {
    $scope.acceptableQuests = [
        {
            title: 'Rat infestation',
            description: 'Rats are swarming the underground and are trying to invade the overworld. Kill a few of them to slow down the infestation.',
            type: 'kill_mob',
            goal: {
                target: 'rats',
                quantity: 10
            }
        },
        {
            title: 'The magány',
            description: 'The notorious Magányos csávó is posting ultra gay poems and awkward images online. Eliminate this threat to society!',
            type: 'kill_boss',
            goal: {
                target: 'Magányos csávó'
            }
        },
        {
            title: 'Treasure hunting',
            description: 'Find me some fine booty. Give me golden rings!',
            type: 'find_item',
            goal: {
                target: 'golden rings',
                quantity: 5
            }
        },
        {
			title: 'Den of Evil',
			description: 'There is a place of great evil in the wilderness. Kashya\'s Rogue scouts have informed me that a cave nearby is filled ' +
				'with shadowy creatures and horrors from beyond the grave. I fear that these creatures are massing for an attack against our encampment. ' +
				'If you are sincere about helping us, find the dark labyrinth and destroy the foul beasts. May the Great Eye watch over you.',
			type: 'kill_mob',
			goal: {
				target: 'zombies',
				quantity: 15
			}
		},
		{
			title: 'Tools of the Trade',
			description: 'When I fled the Monastery, I left behind the Horadric Malus, my enchanted smithing hammer. ' +
				'If you can retrieve it for me, I\'ll use its magic to strengthen your equipment.',
			type: 'find_item',
			goal: {
				target: 'The Horadric Malus'
			}
		},
		{
			title: 'Sisters to the Slaughter',
			description: 'Andariel has desecrated all we hold dear. She must not be permitted to serve Diablo. Destroy her! ' +
				'Her corruption of our Order must be undone!',
			type: 'kill_boss',
			goal: {
				target: 'Andariel'
			}
		}
    ];
});

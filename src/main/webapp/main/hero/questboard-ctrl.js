app.controller('QuestboardCtrl', function ($scope) {
    $scope.acceptableQuests = [
        {
            title: 'Rat infestation',
            description: 'Rats are swarming the underground and are trying to invade the overworld. Kill a few of them to slow the infestation down.',
            type: 'kill_mob',
            goal: {
                target: 'rats',
                quantity: 10
            }
        },
        {
            title: 'The magány',
            description: 'The notorious Magányos csávó is posting unfunny poems and awkward images online. Eliminate this threat to society!',
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
        }
    ];
});

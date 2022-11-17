import React from 'react';
import { shallow } from 'enzyme';
import { Portfolio } from 'components/portfolio';

describe('Portfolio', () => {
  test('renders Portfolio', () => {
    let wrapper = shallow(<Portfolio />)
    expect(wrapper).toHaveDisplayName('ScrollableAnchor')
    expect(wrapper).toHaveProp('id', 'portfolio')

    let items = wrapper.find('PortfolioItem')
    expect(items).toHaveLength(8)

    let mainContainer = wrapper.find('div.grey-container')

    let deployedContainer = mainContainer.childAt(0)
    let firstDeployedRow = deployedContainer.childAt(1)
    let portfolioSite = firstDeployedRow.childAt(0)
    expect(portfolioSite).toHaveProp('image', 'this-site.jpg')

    let yelp = firstDeployedRow.childAt(1)
    expect(yelp).toHaveProp('image', 'yelp-photo.jpg')

    let punterest = firstDeployedRow.childAt(2)
    expect(punterest).toHaveProp('image', 'punterest.jpg')

    let secondDeployedRow = deployedContainer.childAt(2)
    let twitter = secondDeployedRow.childAt(0)
    expect(twitter).toHaveProp('image', 'twitter-app.jpg')

    let rocketLeague = secondDeployedRow.childAt(1)
    expect(rocketLeague).toHaveDisplayName('ComingSoonItem')
    expect(rocketLeague).toHaveProp('image', 'rocket-league.jpg')

    let codeOnlyContainer = mainContainer.childAt(2)
    let firstCodeOnlyRow = codeOnlyContainer.childAt(1)
    let increment = firstCodeOnlyRow.childAt(0)
    expect(increment).toHaveProp('image', 'increment.jpg')

    let youtube = firstCodeOnlyRow.childAt(1)
    expect(youtube).toHaveProp('image', 'play-icon.jpg')

    let calculator = firstCodeOnlyRow.childAt(2)
    expect(calculator).toHaveProp('image', 'calculator.jpg')

    let secondCodeOnlyRow = codeOnlyContainer.childAt(2)
    let bachelorette = secondCodeOnlyRow.childAt(0)
    expect(bachelorette).toHaveProp('image', 'bachelorette-quiz-game.jpg')

    let emptyProfileItem1 = secondCodeOnlyRow.childAt(1)
    expect(emptyProfileItem1).toHaveDisplayName('EmptyItem')

    let emptyProfileItem2 = secondCodeOnlyRow.childAt(2)
    expect(emptyProfileItem2).toHaveDisplayName('EmptyItem')
  });
});

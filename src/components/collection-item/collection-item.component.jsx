import React from 'react';

import { connect } from 'react-redux';


import { addItem } from '../../redux/cart/cart.actions'

import { AddButton, CollectionFooterContainer, CollectionItemContainer, ImageContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl}></ImageContainer>
        <CollectionFooterContainer >
            <NameContainer>{ name }</NameContainer>
            <PriceContainer>{ price }</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
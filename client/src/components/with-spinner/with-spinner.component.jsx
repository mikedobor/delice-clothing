import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoadiing, ...otherProps }) => {
    return isLoadiing ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrappedComponent {...otherProps} />
}

export default WithSpinner;
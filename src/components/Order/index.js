import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import AssetMetadata from './AssetMetadata'
import styled from 'styled-components';

import { OrderSide } from 'opensea-js/lib/types';
import './btn.css';

const Card = styled.div.attrs({ className: "af-class-purchase-button-for-nfts" })`
  min-width: 165px;
  max-width: 275px;
  img {
    height: 120px;
    max-width: 100%;
  }
  img.small {
    max-width: 50%;
    height: 60px;
  }
`

export default class Order extends React.Component {


  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this)
    this.fulfillOrder = this.fulfillOrder.bind(this)
    this.buyAsset = this.buyAsset.bind(this)
  }

  state = {
    errorMessage: null,
    creatingOrder: false
  }

  static propTypes = {
    currentAccount: PropTypes.object,
    order: PropTypes.shape({
      makerAccount: PropTypes.object.isRequired
    }).isRequired,
    seaport: PropTypes.object.isRequired,
    accountAddress: PropTypes.string
  }

  onError(error) {
    // Ideally, you'd handle this error at a higher-level component
    // using props or Redux
    this.setState({ errorMessage: error.message })
    setTimeout(() => this.setState({errorMessage: null}), 3000)
    throw error
  }

  async fulfillOrder() {
    const { order, accountAddress } = this.props

    try {
      this.setState({ creatingOrder: true })
      await this.props.seaport.fulfillOrder({ order, accountAddress })
    } catch(error) {
      this.onError(error)
    } finally {
      this.setState({ creatingOrder: false })
    }
  }

    
  async buyAsset() {
    const { order, accountAddress } = this.props
    this.fulfillOrder();
  }

  render() {
    const { errorMessage } = this.state
    const { order, accountAddress } = this.props
    const { makerAccount, listingTime, asset, assetBundle } = order

    const owner = asset
      ? asset.owner
      : assetBundle.assets[0].owner

    const ts = listingTime.toNumber() * 1000
    const timeLabel = moment(ts).local().fromNow()
    const isOwner = accountAddress && accountAddress.toLowerCase() === owner.address.toLowerCase()

    return (
      <div class = "orderwrappernfts" >
      <Card>
        {(!(accountAddress == "")) &&
        <button onClick={this.buyAsset}  className="af-class-buy-button w-button">Purchase</button>
        }
      </Card>
      </div>
    )
  }
}


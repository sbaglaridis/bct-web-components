import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bct-author-block',
  styleUrl: 'bct-author-block.css',
  shadow: true,
})
export class BctAuthorBlock {
  @Prop() avatar: string;
  @Prop() name: string;
  @Prop() text: string;
  @Prop() url: string;

  render() {
    return (
      <div class="wrapper">
        <div class="avatar">
          <img src={this.avatar} alt={this.name} width="80" height="80"/>
        </div>
        <div class="side">
          <div class="content">
            <div class="display-name">{this.name}</div>
            <p class="paragraph">{this.text}</p>
          </div>
          <div class="footer">
            <slot/>
            <a href={ this.url ?? '#' } rel="nofollow" class="btn">Show more</a>
          </div>
        </div>
      </div>
    );
  }
}

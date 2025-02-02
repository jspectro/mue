const testImage =
  'AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAFCbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBETmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAACRgAAABgAAgAAAAEAAAFqAAAA3AAAAEFpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAZaW5mZQIAAAEAAgAARXhpZkV4aWYAAAAAGmlyZWYAAAAAAAAADmNkc2MAAgABAAEAAAB5aXBycAAAAFlpcGNvAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGFzcAAAAAEAAAABAAAADGF2MUOBABwAAAAADnBpeGkAAAAAAQgAAAATY29scm5jbHgAAQANAAGAAAAAGGlwbWEAAAAAAAAAAQABBQECg4SFAAAA/G1kYXQAAAAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADEBAgARAAAAZgAAAGmHBAABAAAAeAAAAAAAAAABAAAAAQAAAAEAAAABAAAAcGFpbnQubmV0IDQuMy4xMgAABQAAkAcABAAAADAyMzABoAMAAQAAAAEAAAACoAQAAQAAAAEAAAADoAQAAQAAAAEAAAAFoAQAAQAAALoAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAEgAKBxgABpgIaA0yCxJABBEAEADG1FkX';

export const supportsAVIF = () => {
  new Promise((resolve) => {
    const image = new Image();
    image.src = `data:image/avif;base64,${testImage}`;
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
  });
}

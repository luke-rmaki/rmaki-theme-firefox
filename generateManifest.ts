export function generateManifest(
  colors: { [key: string]: string | number },
  version: string,
) {
  const manifest = {
    manifest_version: 2,
    version: version,
    name: "Rmaki",
    theme: {
      images: {},
      properties: {},
      colors: {
        toolbar: colors["black-light-1"],
        toolbar_text: colors.white,
        frame: colors["black-light-1"],
        tab_background_text: colors["purple-dark-2"],
        toolbar_field: colors["black-light-2"],
        toolbar_field_text: colors.white,
        tab_line: colors.accent,
        popup: colors["black-light-2"],
        popup_text: colors.white,
        button_background_active: colors.purple,
        button_background_hover: colors.purple,
        icons_attention: colors.white,
        icons: colors["purple-dark-2"],
        ntp_background: colors.black,
        ntp_text: colors.white,
        popup_border: colors.purple,
        popup_highlight_text: colors.white,
        popup_highlight: colors.purple,
        sidebar_border: colors["purple-dark-2"],
        sidebar_highlight_text: colors.white,
        sidebar_highlight: colors["black-light-1"],
        sidebar_text: colors.white,
        sidebar: colors["black-light-1"],
        tab_background_separator: colors.white,
        tab_text: colors.accent,
        toolbar_bottom_separator: colors.purple,
        toolbar_field_border_focus: colors.white,
        toolbar_field_border: colors["black-light-1"],
        toolbar_field_focus: colors["black-light-1"],
        toolbar_field_highlight_text: colors.black,
        toolbar_field_highlight: colors.accent,
        toolbar_field_separator: colors.white,
        toolbar_field_text_focus: colors.white,
        toolbar_top_separator: colors["black-light-1"],
        toolbar_vertical_separator: colors.purple,
        tab_loading: colors.accent,
      },
    },
  };

  return manifest;
}

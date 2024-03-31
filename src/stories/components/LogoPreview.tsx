import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";

const padding = 64;
const minHeight = 48;
const maxHeight = 64;

const logoStyles: CSSProperties = {
  minHeight: "1rem",
};

export default function LogoPreview({
  colorA,
  colorB,
  horizontal,
  render,
  decorated = true,
}: {
  colorA: string;
  colorB: string;
  horizontal?: boolean;
  render: (props: {
    fg: string;
    bg: string;
    style: CSSProperties;
  }) => ReactNode;
  decorated?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<
    { section: HTMLDivElement; child: HTMLElement }[] | undefined
  >();
  const childRatioRef = useRef<number | undefined>();

  function setElementsRef() {
    if (elementsRef.current) return;

    const selector = "[data-logo-preview-section]";
    const wrapper = wrapperRef.current!;
    const sections = [...wrapper.querySelectorAll(selector)];

    elementsRef.current = sections.map((_section) => {
      const section = _section as HTMLDivElement;
      return {
        section,
        child: section.firstElementChild as HTMLElement,
      };
    });
  }

  function adjustSize() {
    const grid = wrapperRef.current!.firstElementChild as HTMLDivElement;
    const gridWidth = grid.getBoundingClientRect().width;
    const elements = elementsRef.current!;

    elements.forEach(({ section, child }) => {
      function getChildRatio() {
        if (childRatioRef.current) return childRatioRef.current;
        const childRect = child.getBoundingClientRect();
        childRatioRef.current = childRect.height / childRect.width;
        return childRatioRef.current;
      }

      const childRatio = getChildRatio();
      const sectionWidth = Math.min(
        section.getBoundingClientRect().width,
        gridWidth,
      );

      function computeSize(padding: number) {
        function computeWidth(height: number) {
          return height / childRatio;
        }

        function computeHeight(padding: number) {
          console.log(sectionWidth);
          return Math.min((sectionWidth - padding * 2) * childRatio, maxHeight);
        }

        const computedHeight = computeHeight(padding);
        const computedWidth = computeWidth(computedHeight);

        const limitedHeight = Math.max(computedHeight, minHeight);
        const limitedWidth = computeWidth(limitedHeight);

        const canWrap = gridWidth > limitedWidth + padding * 2;

        const height = canWrap ? limitedHeight : computedHeight;
        const width = canWrap ? limitedWidth : computedWidth;

        return { width, height, isInBounds: computedHeight >= minHeight };
      }

      function setForPadding(padding: number) {
        const { width, height, isInBounds } = computeSize(padding);

        child.style.width = `${width}px`;
        child.style.height = `${height}px`;
        section.style.padding = `${padding}px`;

        return isInBounds;
      }

      setForPadding(padding) || setForPadding(padding / 2);
    });
  }

  useEffect(() => {
    setElementsRef();
    adjustSize();

    window.addEventListener("resize", adjustSize);

    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={
        decorated
          ? {
              border: "2px solid hsla(0 0% 50% / 0.25)",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0px 1px 3px hsla(0 0% 50% / 0.25)",
              marginBlock: "3rem",
            }
          : {}
      }
    >
      <LogoPreviewGrid horizontal={horizontal}>
        <LogoPreviewSection foreground={colorA} background={colorB}>
          {render({ fg: colorA, bg: colorB, style: logoStyles })}
        </LogoPreviewSection>
        <LogoPreviewSection foreground={colorB} background={colorA}>
          {render({ fg: colorB, bg: colorA, style: logoStyles })}
        </LogoPreviewSection>
      </LogoPreviewGrid>
    </div>
  );
}

export function LogoPreviewGrid({
  children,
  horizontal = true,
}: {
  children?: ReactNode;
  horizontal?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: horizontal ? "row" : "column",
      }}
    >
      {children}
    </div>
  );
}

export function LogoPreviewSection({
  children,
  background,
  foreground,
}: {
  children?: ReactNode;
  background?: string;
  foreground?: string;
}) {
  return (
    <div
      data-logo-preview-section=""
      style={{
        background,
        color: foreground,
        flex: "1",
        display: "grid",
        placeContent: "center",
        padding: "4rem",
      }}
    >
      {children}
    </div>
  );
}
